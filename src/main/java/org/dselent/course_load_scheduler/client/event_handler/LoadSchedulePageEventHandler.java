package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.LoadSchedulePageEvent;

import com.google.gwt.event.shared.EventHandler;

public interface LoadSchedulePageEventHandler extends EventHandler{
	public void onLoadSchedulePage(LoadSchedulePageEvent evt);

	
}
