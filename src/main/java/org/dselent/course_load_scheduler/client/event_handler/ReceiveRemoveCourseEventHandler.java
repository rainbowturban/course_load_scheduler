package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveRemoveCourseEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveRemoveCourseEventHandler extends EventHandler{
	public void onReceiveRemoveCourse(ReceiveRemoveCourseEvent evt);
}
