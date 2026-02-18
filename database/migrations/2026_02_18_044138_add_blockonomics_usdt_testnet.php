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
        if ($g = \App\Models\Gateway::find(65)) {
            $fields = json_decode($g->fields);
            if (!isset($fields->usdtTestnet)) {
                $fields->usdtTestnet = false;
                $g->fields = json_encode($fields);
                $g->save();
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
