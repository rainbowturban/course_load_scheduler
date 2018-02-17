package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.LoadCalendarEvent;
import com.google.gwt.event.shared.EventHandler;

public interface LoadCalendarEventHandler extends EventHandler{
	public void onLoadCalendar(LoadCalendarEvent evt);

}
