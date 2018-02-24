package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendEditCourseEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendEditCourseEventHandler extends EventHandler {
	public void onSendEditCourse(SendEditCourseEvent evt);
}
