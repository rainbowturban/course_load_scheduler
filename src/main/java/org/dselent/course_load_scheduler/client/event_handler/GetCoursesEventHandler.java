package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.GetCoursesEvent;

import com.google.gwt.event.shared.EventHandler;

public interface GetCoursesEventHandler extends EventHandler {
	public void onGetCourses(GetCoursesEvent evt);
}
