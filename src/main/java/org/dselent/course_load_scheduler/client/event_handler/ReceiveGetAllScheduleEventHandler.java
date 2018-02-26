package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveGetAllScheduleEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveGetAllScheduleEventHandler extends EventHandler{
	public void onReceiveGetAllSchedule(ReceiveGetAllScheduleEvent evt);
}
