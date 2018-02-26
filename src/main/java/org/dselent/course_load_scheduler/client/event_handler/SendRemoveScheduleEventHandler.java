package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendRemoveScheduleEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendRemoveScheduleEventHandler extends EventHandler {
	public void onSendRemoveSchedule(SendRemoveScheduleEvent evt);
}
