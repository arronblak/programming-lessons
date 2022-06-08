function geocode($address){

    // url encode the address
    $address = urlencode($address);

    $url = "http://nominatim.openstreetmap.org/?format=json&addressdetails=1&q={$address}&format=json&limit=1";


    // get the json response
    $resp_json = file_get_contents($url);

    // decode the json
    $resp = json_decode($resp_json, true);


        // get the important data
        $lati = $resp[0]['lat'];
        $longi = $resp[0]['lon'];

            // put the data in the array
            $data_arr = array();            

            array_push(
                $data_arr, 
                    $lati, 
                    $longi
                );

            return $data_arr;}