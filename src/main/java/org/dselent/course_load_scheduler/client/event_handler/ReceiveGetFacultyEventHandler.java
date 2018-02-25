package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveGetFacultyEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveGetFacultyEventHandler extends EventHandler {
	  public void onReceiveGetFaculty(ReceiveGetFacultyEvent evt);

}
