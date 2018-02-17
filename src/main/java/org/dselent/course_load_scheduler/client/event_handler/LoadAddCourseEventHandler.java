package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.LoadAddCourseEvent;

import com.google.gwt.event.shared.EventHandler;

public interface LoadAddCourseEventHandler extends EventHandler{
	public void onLoadAddCourse(LoadAddCourseEvent evt);
}
