package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.GetStartTimesEvent;

import com.google.gwt.event.shared.EventHandler;

public interface GetStartTimesEventHandler extends EventHandler {
	public void onGetStartTimes(GetStartTimesEvent evt);
}
