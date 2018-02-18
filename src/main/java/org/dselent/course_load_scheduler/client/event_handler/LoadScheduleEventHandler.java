package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.LoadScheduleEvent;

import com.google.gwt.event.shared.EventHandler;

public interface LoadScheduleEventHandler extends EventHandler{
	public void onLoadSchedulePage(LoadScheduleEvent evt);
}
