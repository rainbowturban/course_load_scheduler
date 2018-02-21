package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveNewCourseEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveNewCourseEventHandler extends EventHandler{
	public void onReceiveNewCourse(ReceiveNewCourseEvent evt);
}
