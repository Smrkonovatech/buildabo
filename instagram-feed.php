<?php
error_reporting(0);
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('X-Content-Type-Options: nosniff');

$cache_file = __DIR__ . '/instagram_cache.json';
$cache_lifetime = 21600; // 6 hours

// 1. Serve cached data if valid and fresh
if (file_exists($cache_file) && (time() - filemtime($cache_file) < $cache_lifetime)) {
    $cached = file_get_contents($cache_file);
    if (!empty($cached)) {
        echo $cached;
        exit;
    }
}

$api_key  = 'd8c424bff4msh3184df718e0a3c4p10f493jsn752f604ec551';
$api_host = 'instagram-best-experience.p.rapidapi.com';
$user_id  = '41334962546'; // Buildabo Instagram User ID
$username = 'buildabo';

function get_fallback_feed() {
    return [
        'status' => 'ok',
        'source' => 'fallback',
        'posts'  => [
            [
                'id'        => 'post-1',
                'permalink' => 'https://www.instagram.com/buildabo/',
                'image_url' => 'assets/karthik-residence.webp',
                'caption'   => 'Modern architectural design & turnkey house construction in Bangalore. #buildabo #architecture',
            ],
            [
                'id'        => 'post-2',
                'permalink' => 'https://www.instagram.com/buildabo/',
                'image_url' => 'assets/nithin-residence.webp',
                'caption'   => 'Luxury residential villa completed with meticulous attention to detail. #homedesign #luxuryhomes',
            ],
            [
                'id'        => 'post-3',
                'permalink' => 'https://www.instagram.com/buildabo/',
                'image_url' => 'assets/praveen-patil-residence.webp',
                'caption'   => 'Elevating residential spaces with contemporary finishes and seamless flow. #bangalorehomes',
            ],
            [
                'id'        => 'post-4',
                'permalink' => 'https://www.instagram.com/buildabo/',
                'image_url' => 'assets/vinay-residence.webp',
                'caption'   => 'Bespoke interiors and turnkey execution by the buildabo engineering team. #interiordesign',
            ],
            [
                'id'        => 'post-5',
                'permalink' => 'https://www.instagram.com/buildabo/',
                'image_url' => 'assets/hero-1.webp',
                'caption'   => 'Crafting dream homes across Bangalore from foundation to finish. #constructioncompany',
            ],
            [
                'id'        => 'post-6',
                'permalink' => 'https://www.instagram.com/buildabo/',
                'image_url' => 'assets/hero-2.webp',
                'caption'   => 'Interior living space designed for warmth, functionality, and timeless elegance. #interiors',
            ],
            [
                'id'        => 'post-7',
                'permalink' => 'https://www.instagram.com/buildabo/',
                'image_url' => 'assets/about-hero-2.webp',
                'caption'   => 'Structure and design in perfect harmony. Premium residential builds in Bangalore.',
            ],
            [
                'id'        => 'post-8',
                'permalink' => 'https://www.instagram.com/buildabo/',
                'image_url' => 'assets/hero-3.webp',
                'caption'   => 'Explore our portfolio of 100+ executed residential and interior projects across Bangalore.',
            ]
        ]
    ];
}

$url = "https://{$api_host}/feed?user_id={$user_id}";

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL            => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 10,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_HTTPHEADER     => [
        "x-rapidapi-host: {$api_host}",
        "x-rapidapi-key: {$api_key}"
    ],
]);

$raw_response = curl_exec($ch);
$http_code    = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$posts = [];

if ($http_code === 200 && $raw_response) {
    $json = json_decode($raw_response, true);
    $items = $json['items'] ?? $json['data']['items'] ?? [];

    foreach ($items as $item) {
        $img = $item['image_versions2']['candidates'][0]['url'] ?? $item['thumbnail_url'] ?? $item['display_url'] ?? '';
        $code = $item['code'] ?? $item['shortcode'] ?? '';
        $link = !empty($code) ? "https://www.instagram.com/p/{$code}/" : "https://www.instagram.com/{$username}/";
        $caption_text = $item['caption']['text'] ?? $item['caption'] ?? 'View on Instagram';

        if (!empty($img)) {
            $posts[] = [
                'id'        => $item['id'] ?? uniqid('ig_'),
                'permalink' => $link,
                'image_url' => $img,
                'caption'   => $caption_text,
            ];
        }

        if (count($posts) >= 8) break;
    }
}

// If we got valid posts from the API, cache and return them
if (!empty($posts)) {
    $output = json_encode([
        'status' => 'ok',
        'source' => 'api',
        'posts'  => $posts
    ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);

    file_put_contents($cache_file, $output);
    echo $output;
    exit;
}

// If API returned an error/unsubscribed, check if we have older cache
if (file_exists($cache_file)) {
    $existing = file_get_contents($cache_file);
    if (!empty($existing)) {
        echo $existing;
        exit;
    }
}

// Fallback response: guaranteed beautiful experience
$fallback = json_encode(get_fallback_feed(), JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
echo $fallback;
