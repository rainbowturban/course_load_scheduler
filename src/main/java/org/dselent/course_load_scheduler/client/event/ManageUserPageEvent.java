
package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ManageUserPageAction;
import org.dselent.course_load_scheduler.client.event_handler.ManageUserPageEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ManageUserPageEvent extends GwtEvent<ManageUserPageEventHandler>{
	public static Type<ManageUserPageEventHandler> TYPE = new Type<ManageUserPageEventHandler>();
	
	private ManageUserPageAction action;
	
	public ManageUserPageEvent(ManageUserPageAction action)
	{
		this.action = action;
	}
	
	public ManageUserPageAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<ManageUserPageEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(ManageUserPageEventHandler handler)
	{
		((ManageUserPageEventHandler) handler).onManageUserPage(this);
	}

}
