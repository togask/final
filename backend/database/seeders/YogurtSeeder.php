<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class YogurtSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('yogurts')->insert([
            ['name' => 'ストロベリーヨーグルト', 'price' => 110],
            ['name' => 'ブルーベリーヨーグルト', 'price' => 120],
            ['name' => 'バナナヨーグルト', 'price' => 130],
            ['name' => 'オレンジヨーグルト', 'price' => 140],
            ['name' => 'アップルヨーグルト', 'price' => 150],
        ]);
    }
}
