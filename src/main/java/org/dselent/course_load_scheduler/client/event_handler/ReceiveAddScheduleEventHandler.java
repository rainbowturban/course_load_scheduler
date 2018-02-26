package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveAddScheduleEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveAddScheduleEventHandler extends EventHandler{
	public void onReceiveAddSchedule(ReceiveAddScheduleEvent evt);
}
