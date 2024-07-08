<?php

header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);


$DEST_EMAIL = "corporate@tswmgmt.com";
$contactsubmitted = false;
// $companyName = $_POST["companyName"];
// $email = $_GET["email"];
// $eventDate = $_POST["eventDate"];
// $location = $_POST["location"];
// $price = $_POST["price"];
// $guestCount = $_POST["guestCount"];
// $techProvisions = $_POST["techProvisions"];
// $timings = $_POST["timings"];
// $lineup = $_POST["lineup"];



echo json_encode($data);
// echo $data["contact"]["email"];

$companyName = $data["contact"]["companyName"];
$email = $data["contact"]["email"];
$eventDate = $data["contact"]["eventDates"];
$location = $data["contact"]["location"];
$price = $data["contact"]["price"];
$guestCount = $data["contact"]["guestCount"];
$techProvisions = $data["contact"]["techProvisions"];
$timings = $data["contact"]["timings"];
$lineup = $data["contact"]["lineup"];

echo $data["companyName"];
echo $data["email"];
echo "companyName $companyName";

    $msgbody = "
            Company Name: $companyName\n
            Email: $email\n\n\n
            Event Date(s): $eventDate\n
            Location: $location\n
            No. of Guests: $guestCount\n
            Admission Price: $price\n
            Tech Provisions: $techProvisions\n
            Timings: $timings\n
            Proposed Lineup: $lineup\n
        ";

    mail($DEST_EMAIL, "NIComedy Coperate Bookings form", $msgbody, "From: $companyName <$email>\n\r");
    $contactsubmitted = true;
echo "Submitted";

?>
