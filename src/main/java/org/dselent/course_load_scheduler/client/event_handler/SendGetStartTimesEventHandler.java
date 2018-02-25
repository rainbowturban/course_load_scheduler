package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendGetStartTimesEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendGetStartTimesEventHandler extends EventHandler {
	public void onGetStartTimes(SendGetStartTimesEvent evt);
}
