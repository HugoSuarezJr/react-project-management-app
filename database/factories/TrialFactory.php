<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Trial>
 */
class TrialFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->randomElement([
                'Cure for COVID',
                'Medicine for Arthritis',
                'Cure for Alphaviruses',
                'Trial on Asthma Medicine',
                'Pain relief for Heartburn',
                'Possible Cure for Diptheria',
                'Trial Drug for Kidney Cancer',

            ]),
            'description' => fake()->realText(),
            'due_date' => fake()->dateTimeBetween('now', '+1 year'),
            'status' => fake()->randomElement(['pending', 'in_progress', 'completed']),

            'priority' => fake()->randomElement(['low', 'medium', 'high']),
            'assigned_user_id' => 1,

            'image_path' => '',
            'created_by' => 1,
            'updated_by' => 1,
            'created_at' => time(),
            'updated_at' => time()
        ];
    }
}
