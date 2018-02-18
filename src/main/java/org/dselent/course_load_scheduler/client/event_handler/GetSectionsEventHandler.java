package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.GetSectionsEvent;

import com.google.gwt.event.shared.EventHandler;

public interface GetSectionsEventHandler extends EventHandler{
	public void onGetSections(GetSectionsEvent evt);
}
