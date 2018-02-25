package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveGetSectionTypesEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveGetSectionTypesEventHandler extends EventHandler{
	public void onReceiveGetSectionTypes(ReceiveGetSectionTypesEvent handler);

}
