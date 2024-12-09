<?php

namespace App\Services\ImagesService;

use App\Models\Article;
use Exception;
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

  public function saveImages(string $path, int $article_id, array $files = null)
  {
    if (!is_null($files)) {
      foreach ($files as $file) {
        if (Storage::missing("public/images/{$path}/{$article_id}", $file['file'])) {
          Storage::put("public/images/{$path}/{$article_id}", $file['file']);
        }
      }
    }
  }

  public function updateThumbnail(string $path, int $article_id, $thumbnail)
  {
    if (is_null($thumbnail)) {
      return throw new Exception('Missing thumbnail');
    }

    $article = Article::find($article_id);

    if (!is_null($article->thumbnail)) {
      Storage::delete("public/images/{$path}/{$article_id}/{$article->thumbnail}");
    }

    Storage::put("public/images/{$path}/{$article_id}", $thumbnail);
  }

  private function updateImages(string $path, int $article_id, array $files = null)
  {
    $imagesOnDisk = Storage::files("public/images/{$path}/{$article_id}");
    $filesToDelete = array_diff($imagesOnDisk, $files);
    dd($filesToDelete);
    foreach ($filesToDelete as $file) {
      // Storage::delete("public/images/{$path}/{$article_id}", $file);
    }
  }

  public function delete(string $path, int $article_id): void
  {
    $article = Article::find($article_id);
    $article->images()->delete();

    if (Storage::exists("public/images/{$path}/{$article_id}")) {
      Storage::deleteDirectory("public/images/{$path}/{$article_id}");
    }
  }
}
