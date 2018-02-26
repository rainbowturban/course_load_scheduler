package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendAddScheduleEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendAddScheduleEventHandler extends EventHandler {
	public void onSendAddSchedule(SendAddScheduleEvent evt);
}
