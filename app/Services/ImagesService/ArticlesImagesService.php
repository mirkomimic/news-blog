<?php

namespace App\Services\ImagesService;

use Illuminate\Support\Facades\Storage;

class ArticlesImagesService
{
  public function create(string $path, int $article_id, array $files = null, $thumbnail): void
  {
    if (!is_null($files)) {
      foreach ($files as $file) {
        Storage::put("public/images/{$path}/{$article_id}", $file['file']);
      }
    }

    if (!is_null($thumbnail)) {
      Storage::put("public/images/{$path}/{$article_id}", $thumbnail);
    }
  }
}
