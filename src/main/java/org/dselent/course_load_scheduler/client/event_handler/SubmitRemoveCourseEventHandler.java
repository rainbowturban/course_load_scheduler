package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SubmitRemoveCourseEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SubmitRemoveCourseEventHandler extends EventHandler{
	public void onSubmitRemoveCourse(SubmitRemoveCourseEvent evt);
}
