<?php

/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2024. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

namespace App\Http\Controllers\Gateways;

use Illuminate\Http\Request;
use App\PaymentDrivers\Blockonomics\BlockonomicsPaymentDriver;

class BlockonomicsController extends Controller
{
    public function index(Request $request)
    {
        $blockonomicsPaymentDriver = new BlockonomicsPaymentDriver();
        $data = $request->all(); // Get data from the request
        $response = $blockonomicsPaymentDriver->paymentResponse($data);
        
        return response()->json($response);
    }
}
