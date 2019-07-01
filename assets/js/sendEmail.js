var template_params = {
   "name": "name_value",
   "email": "email_value",
   "message": "message_value"
}

var service_id = "default_service";
var template_id = "vacation";
emailjs.send(service_id, template_id, template_params);