	  var timer_interval;
		 var remaining_minutes = 20;
		 var remaining_seconds = 0;
		 function triggerAlarm() {
		 alarm_sound = document.getElementById('alarm_sound');
		 alarm_sound.play();
		 }
		 function updateTimer() {
		  var remaining_time_display = document.getElementById('remaining_time');
			if (remaining_seconds == 0) {
			   if (remaining_minutes == 0) {
			      triggerAlarm();
		 stopTimer();
			      }
	  else {
			   remaining_minutes = remaining_minutes - 1;
			   remaining_seconds = 59;
	  }
			}
			else {
			     remaining_seconds = remaining_seconds - 1;
			     }
		 remaining_time_display.innerHTML = remaining_minutes + ':' + remaining_seconds;
   		}
		function startTimer() {
			timer_interval = setInterval('updateTimer()', 1000);
		}
		 function stopTimer() {
		 clearInterval(timer_interval);
	  }