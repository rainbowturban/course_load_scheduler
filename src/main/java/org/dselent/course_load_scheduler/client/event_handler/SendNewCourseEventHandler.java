package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendNewCourseEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendNewCourseEventHandler extends EventHandler{
	public void onSendNewCourse(SendNewCourseEvent evt);
}
