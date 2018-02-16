package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.LoadEditCourseEvent;

import com.google.gwt.event.shared.EventHandler;

public interface LoadEditCourseEventHandler extends EventHandler{
	public void onLoadEditCoursePage(LoadEditCourseEvent evt);
}
