package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.LoadViewCoursesEvent;

import com.google.gwt.event.shared.EventHandler;

public interface LoadViewCoursesEventHandler extends EventHandler{
	public void onLoadViewCourses(LoadViewCoursesEvent evt);
}
