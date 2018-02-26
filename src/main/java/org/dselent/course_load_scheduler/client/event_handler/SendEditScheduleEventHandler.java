package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendEditScheduleEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendEditScheduleEventHandler extends EventHandler {
	public void onSendEditSchedule(SendEditScheduleEvent evt);
}
