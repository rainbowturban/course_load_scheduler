package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveGetSectionTypesAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveGetSectionTypesEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveGetSectionTypesEvent extends GwtEvent<ReceiveGetSectionTypesEventHandler>{
	public static Type<ReceiveGetSectionTypesEventHandler> TYPE = new Type<ReceiveGetSectionTypesEventHandler>();
	
	private ReceiveGetSectionTypesAction action;
	
	public ReceiveGetSectionTypesEvent(ReceiveGetSectionTypesAction action)
	{
		this.action = action;
	}
	
	public ReceiveGetSectionTypesAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveGetSectionTypesEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveGetSectionTypesEventHandler handler)
	{
		handler.onReceiveGetSectionTypes(this);
	}

}
