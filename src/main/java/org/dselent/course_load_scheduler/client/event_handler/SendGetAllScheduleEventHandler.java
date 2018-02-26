package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendGetAllScheduleEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendGetAllScheduleEventHandler extends EventHandler {
	public void onSendGetAllSchedule(SendGetAllScheduleEvent evt);
}
