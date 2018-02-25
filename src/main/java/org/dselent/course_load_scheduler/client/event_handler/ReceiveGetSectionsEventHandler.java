package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveGetSectionsEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveGetSectionsEventHandler extends EventHandler{
	public void onReceiveGetSections(ReceiveGetSectionsEvent handler);

}
