package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SubmitNewCourseEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SubmitNewCourseEventHandler extends EventHandler{
	public void onSubmitNewCourse(SubmitNewCourseEvent evt);
}
