<?php

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('articles', function (Blueprint $table) {
      $table->id();
      $table->string('title');
      $table->string('thumbnail');
      $table->string('thumbnail_blob');
      $table->foreignIdFor(Category::class);
      $table->foreignIdFor(User::class);
      $table->text('content');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('articles');
  }
};
