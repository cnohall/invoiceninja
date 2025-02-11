<?php

namespace App\Import\Providers;

use Illuminate\Support\Facades\Cache;
use App\Services\Quickbooks\QuickbooksService;
use App\Services\Quickbooks\Transformers\ClientTransformer;

class QBBackup extends BaseImport implements ImportInterface
{

    private array $qb_data = [];

    private QuickbooksService $qb;

    public function __construct(array $request, Company $company)
    {
        parent::__construct($request, $company);

        $_base64_encoded_qb_data = Cache::get($this->request['hash'].'-qb_backup');
        $qb_json = base64_decode($_base64_encoded_qb_data);
        $this->qb_data = json_decode($qb_json, true);

        $this->qb = new QuickbooksService($this->company);
        
    }

    public function import(string $entity)
    {
        if (in_array($entity, ['client', 'invoice', 'product', 'payment', 'vendor', 'expense'])) {
            $this->{$entity}();
        }
    }

    public function transform(array $data)
    {
    }

    public function client()
    {
        $this->qb->client->importToNinja($this->qb_data['clients']);
    }

    public function product()
    {
        $this->qb->product->importToNinja($this->qb_data['products']);
    }

    public function invoice()
    {
        $this->qb->invoice->importToNinja($this->qb_data['invoices']);
    }

    public function payment()
    {

    }

    public function vendor()
    {

    }

    public function expense()
    {

    }
}