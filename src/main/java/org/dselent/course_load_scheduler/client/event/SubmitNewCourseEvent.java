package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SubmitNewCourseAction;
import org.dselent.course_load_scheduler.client.event_handler.SubmitNewCourseEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SubmitNewCourseEvent extends GwtEvent<SubmitNewCourseEventHandler>{
		public static Type<SubmitNewCourseEventHandler> TYPE = new Type<SubmitNewCourseEventHandler>();
		
		private SubmitNewCourseAction action;
		
		public SubmitNewCourseEvent(SubmitNewCourseAction action)
		{
			this.action = action;
		}
		
		public SubmitNewCourseAction getAction()
		{
			return action;
		}
		
		/*
		 * 
		 */
		@Override
		public Type<SubmitNewCourseEventHandler> getAssociatedType()
		{
			return TYPE;
		}

		/*
		 * 
		 */
		@Override
		protected void dispatch(SubmitNewCourseEventHandler handler)
		{
			handler.onSubmitNewCourse(this);
		}
}
