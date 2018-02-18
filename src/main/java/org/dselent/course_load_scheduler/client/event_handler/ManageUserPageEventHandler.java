package org.dselent.course_load_scheduler.client.event_handler;
import org.dselent.course_load_scheduler.client.event.ManageUserPageEvent;
import com.google.gwt.event.shared.EventHandler;

public interface ManageUserPageEventHandler extends EventHandler{
	
	public void onManageUserPage(ManageUserPageEvent evt);
}
