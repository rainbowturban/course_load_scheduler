package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveEditScheduleEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveEditScheduleEventHandler extends EventHandler{
	public void onReceiveEditSchedule(ReceiveEditScheduleEvent evt);
}
