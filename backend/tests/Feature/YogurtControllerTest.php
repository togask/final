<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Yogurt;

class YogurtControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * 全てのヨーグルトを取得するテスト
     */
    public function test_index(): void
    {
        $response = $this->get('/api/yogurts');

        $response->assertStatus(200);
    }

    /**
     * 新しいヨーグルトを作成するテスト
     */
    public function test_store(): void
    {
        $response = $this->post('/api/yogurts', [
            'name' => 'Test Yogurt',
            'price' => 100
        ]);

        $response->assertStatus(201)
            ->assertJsonPath('name', 'Test Yogurt');
        $this->assertDatabaseHas('yogurts', ['name' => 'Test Yogurt']);
    }

    /**
     * 特定のヨーグルトを取得するテスト
     */
    public function test_show()
    {
        $yogurt = Yogurt::create(['name' => 'Blueberry Yogurt', 'price' => 120]);
        $response = $this->get("/api/yogurts/{$yogurt->id}");
        $response->assertStatus(200);
    }

    /**
     * ヨーグルトのデータを更新するテスト
     */
    public function test_update()
    {
        $yogurt = Yogurt::create(['name' => 'Original Yogurt', 'price' => 90]);
        $response = $this->put("/api/yogurts/{$yogurt->id}", [
            'name' => 'Updated Yogurt',
            'price' => 95
        ]);
        $response->assertStatus(200);
        $this->assertDatabaseHas('yogurts', ['name' => 'Updated Yogurt']);
    }

    /**
     * ヨーグルトを削除するテスト
     */
    public function test_destroy()
    {
        $yogurt = Yogurt::create(['name' => 'Vanilla Yogurt', 'price' => 110]);
        $response = $this->delete("/api/yogurts/{$yogurt->id}");
        $response->assertStatus(204);
        $this->assertDatabaseMissing('yogurts', ['name' => 'Vanilla Yogurt']);
    }
}
