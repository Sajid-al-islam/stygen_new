<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
require __DIR__ . '../../../../vendor/autoload.php';

use FacebookAds\Api;
use FacebookAds\Logger\CurlLogger;
use FacebookAds\Object\ServerSide\ActionSource;
use FacebookAds\Object\ServerSide\Content;
use FacebookAds\Object\ServerSide\CustomData;
use FacebookAds\Object\ServerSide\DeliveryCategory;
use FacebookAds\Object\ServerSide\Event;
use FacebookAds\Object\ServerSide\EventRequest;
use FacebookAds\Object\ServerSide\UserData;
class FbapiController extends Controller
{
    public function fbapi()
    {
        $access_token = 'EAAIFGqIkUswBAKOwZCoR5sEUt4bD52uCKGznmiZBsNevDZCX09Thltnv4dz0ny2iJdhl2op9lWaf2WA2HTUQ4zwuFkqj7u3a3gddSBpTKkZCZAkOiQyIwP9jYciZA3eIVNysBFlCIL5UmmNzKT2r91rOajrSP4Lx0VOybmprAf0TTZAqNDBrBOHQ2UCrCDpURsZD';
        $pixel_id = '253360395780128';

        $api = Api::init(null, null, $access_token);
        $api->setLogger(new CurlLogger());

        $user_data = (new UserData())
            ->setEmails(array('joe@eg.com'))
            ->setPhones(array('12345678901', '14251234567'))
            // It is recommended to send Client IP and User Agent for Conversions API Events.
            ->setClientIpAddress($_SERVER['REMOTE_ADDR'])
            ->setClientUserAgent($_SERVER['HTTP_USER_AGENT'])
            ->setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890')
            ->setFbp('fb.1.1558571054389.1098115397');

        $content = (new Content())
            ->setProductId('product123')
            ->setQuantity(1)
            ->setDeliveryCategory(DeliveryCategory::HOME_DELIVERY);

        $custom_data = (new CustomData())
            ->setContents(array($content))
            ->setCurrency('usd')
            ->setValue(123.45);

        $event = (new Event())
            ->setEventName('Purchase')
            ->setEventTime(time())
            ->setEventSourceUrl('http://jaspers-market.com/product/123')
            ->setUserData($user_data)
            ->setCustomData($custom_data)
            ->setActionSource(ActionSource::WEBSITE);

        $events = array();
        array_push($events, $event);

        $request = (new EventRequest($pixel_id))
            ->setEvents($events);
        $response = $request->execute();
        print_r($response);
    }
}
