package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveGetUsersAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveGetUsersEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveGetUsersEvent extends GwtEvent<ReceiveGetUsersEventHandler>{
	public static Type<ReceiveGetUsersEventHandler> TYPE = new Type<ReceiveGetUsersEventHandler>();
	
	private ReceiveGetUsersAction action;
	
	public ReceiveGetUsersEvent(ReceiveGetUsersAction action)
	{
		this.action = action;
	}
	
	public ReceiveGetUsersAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveGetUsersEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveGetUsersEventHandler handler)
	{
		handler.onReceiveGetUsers(this);
	}

}
