package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveGetOneFacultySectionInfoEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveGetOneFacultySectionInfoEventHandler extends EventHandler {
	  public void onReceiveGetOneFacultySectionInfo(ReceiveGetOneFacultySectionInfoEvent evt);

}
