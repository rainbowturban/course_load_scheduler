package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendGetEndTimesEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendGetEndTimesEventHandler extends EventHandler{
	public void onGetEndTimes(SendGetEndTimesEvent evt);

}
