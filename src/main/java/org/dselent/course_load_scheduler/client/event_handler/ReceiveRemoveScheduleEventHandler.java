package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveRemoveScheduleEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveRemoveScheduleEventHandler extends EventHandler{
	public void onReceiveRemoveSchedule(ReceiveRemoveScheduleEvent evt);
}
