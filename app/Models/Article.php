<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Article extends Model
{
  use HasFactory;

  protected static function booted(): void
  {
    static::addGlobalScope('images', function (Builder $builder) {
      $builder->with(['images', 'category']);
    });
  }

  public function images(): HasMany
  {
    return $this->hasMany(ArticleImages::class);
  }

  public function category(): BelongsTo
  {
    return $this->belongsTo(Category::class);
  }
}
