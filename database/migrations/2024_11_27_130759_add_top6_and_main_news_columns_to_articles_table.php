<?php

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
    Schema::table('articles', function (Blueprint $table) {
      $table->boolean('top6')->default(false);
      $table->boolean('main_news')->default(false);
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::table('articles', function (Blueprint $table) {
      $table->dropColumn(['top6', 'main_news']);
    });
  }
};
