package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendRemoveCourseEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendRemoveCourseEventHandler extends EventHandler{
	public void onSendRemoveCourse(SendRemoveCourseEvent evt);
}
